;
; BIND reverse data file for local loopback interface
;
$TTL	604800
@	IN	SOA	cotilla.es. root.cotilla.es. (
			     21		; Serial
			 604800		; Refresh
			  86400		; Retry
			2419200		; Expire
			 604800 )	; Negative Cache TTL
;
@	IN	NS	cotilla.es.
cotilla	IN	A       210.34.2.3
40      IN      PTR     cotilla.es.
