const config = {
  type: 'service_account',
  project_id: 'fir-blog-app-1637b',
  private_key_id: 'cedad25e161d50a14cdf59bf24fc7d76d45095bd',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQCnOPYNQ9rd1xWe\n24dk/bpvvSuzAJvHRAtGzITsXhx/5Go4KO9nronXIS84BLJyjkfSsQiywW9wB1PX\nuobfPYV0ZvwqgdEkZ092FVejZjZ8njtjOiu6DCnuyG8B9wqcRIvAtp8b5A6//SuR\nNzQDLaBKvSzfaNaBP/gPwdOGSwCb60o4Z/DXW+lHnzADHRMneurCeAE5n/62NmQF\n1jM+ypSUbjLXN2J+oPHyliT9jryFLSSigHMdymrjnEt5kPFHcXmJsfmZJbgjYR3Z\nx6mQxIrfzHBWlCRXulD4g/uQD6HzZQMpkvOaNn7jnV0j5eujhWjl1g16ryaWHInw\nHhxa2P55AgMBAAECgf9tzjgoETioWlsAeaRDe/p0xp3e2CSqXOmg+XaBd1CFH3P+\n+pRx1awJkP900F3+oMV1bukqFA/lfE53fQAbxp8GrcuGv3JXbkIqkcWrNDG3Yv3W\nsYnsBtZQG3GcyWg1MiESxRtJGtKPIMzSpg0vUW7uxlKOJBjCAQDIhJBllPObKw4f\nLN3+00xPtm9lp+T5pjoR9LWN2QHOocXo8X1gBic0UYn2Lbr+QfYyexVnwNbRo9id\nlnINdFN4DUMH978/qe5ph38x5dd7Ey+AcXlq3x2qxN/q/Evg4ZaHgPJQQZSXkmmt\ng2zr+XkD5LpoCaFC8gkD9MoMH0MkLQxEubU7cCECgYEA4bbDdsKSAD+y4iMYIKTq\nYV6ZzcDqWNYpVqB+xbL5MU9qWOa1Kpk3DePSPdq12vufMCZ7QR2RQVcIWpJGj3MW\ndwrRXC1FiU8n7sunLdf6/9Po26Ffg7bLkaz9o9s4m5r8mYj1/MTsirp7e6V7HADO\nnLU6cGDskrnzpLjVI73EjZkCgYEAvakG6M8Y3i/5I1cz75ZnJQBfBXKD0Cn652jE\n/NDIDN8CVrP3RzPZ+TcEwpp3pAprBFNNKmeZnGk7oqWsKtNOxrCYqkoLacTIPwUG\ndQgFZ+U0xIBRB11qans/f+K/RGsYi5xwNpYcCgr2H/i4PX9TKyoGSey/LzjouJMP\ngIdFw+ECgYBmGXMPbHH4lNfI/RDz60VuKAmwjbwz1SQ74DuYGB4qlP7JGgsHKulB\najV271Dlrn5SnIWSbdp/0OuhdJtgVjHqRUVwybWzp8+rcAm+bf1G7cdeWf/Hp88r\npTHShd50XMY4eUC0RyuskTA8PR2UDDVpo3y8yssYj+7LKySWl0equQKBgFsNVcLZ\nAeBRebMsv0NLmpMZ/YRY+M0sCkekdcXF2fTL74x+c72cOA48Cq3+iGeZlM0LzOUJ\nvaZoovevv9sDfTNIPtKqH5aUoWoX2ITA6A9763xW+g+mGluqdc7IpfiLzcngvcKH\nCEkOACFTP+hOQzhawZAl95cNJDTQbUXQK38hAoGAUYV86yKDH7WxE06nti/HM9Jf\nQQJp1rqzj90jh6WWtnDJ0ZMAPG3wscaw2hC29oMmg+E5Lg8BgFwUsXTntRHAztHe\nC0wc3IqK7JeTXHYNsN9bpykPu2vPrRVFQ7/Pq5eT3aUVgjQpP6dFQwDheZJnZFqt\naXboQoSYEftfFRog+L8=\n-----END PRIVATE KEY-----\n',
  client_email:
    'firebase-adminsdk-ya55g@fir-blog-app-1637b.iam.gserviceaccount.com',
  client_id: '115821043518548653329',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ya55g%40fir-blog-app-1637b.iam.gserviceaccount.com'
}

import admin from 'firebase-admin'

if (!admin.apps.length)
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: config.client_email,
      privateKey: config.private_key,
      projectId: config.project_id
    })
  })

export const firebaseAdmin = admin
