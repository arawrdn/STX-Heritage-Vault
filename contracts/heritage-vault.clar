;; Heritage Vault: Non-Custodial Asset Recovery
;; Owner must "Check-in" to prevent Heir from claiming

;; Constants
(define-constant ERR-NOT-AUTHORIZED (err u401))
(define-constant ERR-TOO-EARLY (err u402))
(define-constant ERR-VAULT-EMPTY (err u403))

;; Data Vars
(define-map Vaults principal 
    {
        heir: principal,
        last-checkin: uint,
        grace-period: uint, ;; in blocks (e.g., 144 = ~1 day)
        balance: uint
    }
)

;; Public: Initialize Vault
(define-public (setup-vault (heir principal) (period uint))
    (begin
        (stx-transfer? (stx-get-balance tx-sender) tx-sender (as-contract tx-sender))
        (ok (map-set Vaults tx-sender {
            heir: heir,
            last-checkin: block-height,
            grace-period: period,
            balance: (stx-get-balance tx-sender)
        }))
    )
)

;; Public: Heartbeat (Reset the timer)
(define-public (heartbeat)
    (let ((vault (unwrap! (map-get? Vaults tx-sender) ERR-NOT-AUTHORIZED)))
        (ok (map-set Vaults tx-sender 
            (merge vault { last-checkin: block-height })
        ))
    )
)

;; Public: Claim by Heir
(define-public (claim-inheritance (owner principal))
    (let (
        (vault (unwrap! (map-get? Vaults owner) ERR-VAULT-EMPTY))
        (deadline (+ (get last-checkin vault) (get grace-period vault)))
    )
    (asserts! (> block-height deadline) ERR-TOO-EARLY)
    (as-contract (stx-transfer? (get balance vault) (as-contract tx-sender) (get heir vault)))
    )
)
