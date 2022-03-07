export interface Bill {
  "id": string,
  "code": string,
  "clientid": string,
  "total": string,
	"subTotal": string,
	"iva": string,
	"retencion": string,
	"creationDate": string,
	"state": string,
	"paid": boolean,
	"paymentDate": string
}
