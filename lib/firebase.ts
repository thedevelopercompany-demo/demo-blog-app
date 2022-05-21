import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBHEVqAljzi1k0UmxBad8bBDHSeHq9Cq2s',
  authDomain: 'fir-blog-app-1637b.firebaseapp.com',
  projectId: 'fir-blog-app-1637b',
  storageBucket: 'fir-blog-app-1637b.appspot.com',
  messagingSenderId: '604577188970',
  appId: '1:604577188970:web:86ea58dfbded77f5030e13'
}

export const firebaseApp = initializeApp(firebaseConfig)
