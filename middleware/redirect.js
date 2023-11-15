export default function ({ route, redirect }) {
    if (route.path === '/contact-us') {
      redirect('/company/contact-us');
    }
  }
  