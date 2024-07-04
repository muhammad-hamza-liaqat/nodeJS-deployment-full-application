const homePage = async (req,res)=>{
    res.end("welcome to the express home page!")
}

const menuPage = async (req,res)=>{
    res.end("menu page of the nodejs application!")
}

const termsPage = async (req,res)=>{
    res.end("terms and condition page of the nodejs application")
}

module.exports={
    homePage,
    menuPage,
    termsPage
}