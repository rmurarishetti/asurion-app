export const NavLinks = [
    {
      id: "home",
      title: "Home",
      link: "/",
    },
    {
      id: "start",
      title: "Get Started",
      link: "/#start",
    },
    {
        id:"signin",
        title: "Login/Register",
        link: "/api/auth/login"

    }
  ];
  

  export const pricingPackages =[
    {
      id: "pricing-1",
      title: "Asurion Basic",
      recommended: "Basic",
      content:["Upto 3 Devices", "All maintainence, repair and damages covered for 1 year.", "For Laptops, Phones and Tablets"],
      pricing:"$14.99",
      duration: "1 year",
      buttontext:"Get Started",
      elgoPackage: false
    },
    {
      id: "pricing-2",
      title:"Asurion Advanced",
      recommended:"Recommended",
      content:["Upto 5 Devices", "Rapid Service Requests served in less than 3 hrs", "All maintainence, repair and damages covered for 2 years.", "For Laptops, Phones and Tablets"],
      pricing:"$21.99",
      duration: "2 years",
      buttontext:"Upgrade Now",
      elgoPackage: true
    },
    {
      id: "pricing-3",
      title:"Asurion Pro",
      recommended:"Premium",
      content:["Upto 6 Devices", "Rapid Service Requests served in less than 3 hrs", "All maintainence, repair and damages covered for 3 years.", "For Laptops, Phones and Tablets", "Latest Device Upgrade and Replacement for a nominal fee."],
      pricing:"$25.99",
      duration: "3 years",
      buttontext:"Choose Plan",
      elgoPackage: false
    }
  ]