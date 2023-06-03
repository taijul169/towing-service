
const express =  require('express');
const crypto = require("crypto");
const bodyParser =  require("body-parser");
const flash =  require('connect-flash')
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const dotenv =  require('dotenv');
dotenv.config({path:'../config.env'});
const fetch  = require("node-fetch");
var FormData = require('form-data');
var fs = require('fs');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
const axios =  require("axios");
// middleware
// const authshop = require('../middleware/authenticateshop')
// const authcourier = require('../middleware/authenticatecourier')
// const authadmin = require('../middleware/authenticateadmin')
// const authcustomer = require('../middleware/authenticatecustomer')


// localStorage
// var LocalStorage = require('node-localstorage').LocalStorage,
// localStorage = new LocalStorage('./scratch');

// const { rawListeners, schema } = require("../models/model");
const { handlebars } = require("hbs");
const router = express.Router();
const { query } = require('express');
const { json } = require('body-parser');
// const auth = require("../middleware/auth");


// const authcustomerNormal = require('../middleware/authenticateCustomerNormal');
http://192.168.0.249:5000/api/order/getorderfortoday

// =============================================================TWOING SERVICE START=========================================================
router.get('/', (req,res)=>{
    try {
        res.render("customer/index")
    } catch (error) {
        console.log(error)
    }
      
 });
router.get('/send-request',(req,res)=>{
    try {
        res.render('customer/send-request')
    } catch (error) {
        
    }
})

// admin section start
router.get('/admin/control',(req,res)=>{
    try {
        res.render('admin/index')
    } catch (error) {
        
    }
})

router.get('/admin/requests',(req,res)=>{
    try {
        res.render('admin/requests')
    } catch (error) {
        
    }
})

router.get('/admin/groups',(req,res)=>{
    try {
        res.render('admin/groups')
    } catch (error) {
        
    }
})
router.get('/admin/login',(req,res)=>{
    try {
        res.render('admin/login')
    } catch (error) {
        
    }
})


// groups start

router.get('/groups/login',(req,res)=>{
    try {
        res.render('groups/login')
    } catch (error) {
        
    }
})

router.get('/groups/signup',(req,res)=>{
    try {
        res.render('groups/signup')
    } catch (error) {
        
    }
})


router.get('/groups/control',(req,res)=>{
    try {
        res.render('groups/index')
    } catch (error) {
        
    }
})

router.get('/groups/requests',(req,res)=>{
    try {
        res.render('groups/requests')
    } catch (error) {
        
    }
})
// =============================================================TWOING SERVICE END=========================================================


// ---------------------------------------------------------------------------------medicine start -----------------------------------
// create product route
// router.get('/', (req,res)=>{
//     try {
//         res.render("customer/index")
//     } catch (error) {
//         console.log(error)
//     }
      
//  });
// router.get('/admin',authadmin, (req,res,next)=>{
//     try {
//         fetch(`http://163.53.182.187:5000/api/auth/getallusers`)
//         .then(res =>res.json())
//         .then(customerlistAll =>{
//             fetch(`http://163.53.182.187:5000/api/products/allproducts`)
//             .then(res => res.json())
//             .then(productlist =>{
//                 fetch(`http://163.53.182.187:5000/api/order/getallorders`)
//                 .then(res => res.json())
//                 .then(orderlist =>{
//                     fetch(`http://163.53.182.187:5000/api/order/getallcustomers`)
//                         .then(res => res.json())
//                         .then(customerlist =>{
//                             let totalSale =0;
//                             let totalSaleToday =0;
//                             let totalStock =0;
//                             orderlist.map((item,idx)=>{
//                                 totalSale = totalSale + parseInt(item.total) 
//                                 return item
//                             })
//                             const date = new Date();
//                             let day = date.getDate();
//                             let month = date.getMonth() + 1;
//                             let year = date.getFullYear();
    
//                             // This arrangement can be altered based on how we want the date's format to appear.
//                             let currentDate = `${day}-${month}-${year}`;
//                            const orderlistToday = orderlist.filter((item,idx)=>{
//                                 return item.createdDate == currentDate
//                             })
//                             // finding today's sale
//                             orderlistToday.map((item,idx)=>{
//                                 totalSaleToday = totalSaleToday + parseInt(item.total) 
//                                 return item
//                             })
    
//                             // finding total stock
//                             productlist.map((item,idx)=>{
//                                 totalStock = totalStock + parseInt(item.stock) 
//                                 return item
//                             })
//                             console.log("productlist",productlist)
                            
//                             res.render("admin/index",{productlist,userData:req.userData,customerlist,customerlist,totalSale,orderlist,userData:req.userData,orderlistToday,totalSaleToday,totalStock,customerlistAll})
//                         })
//                 })
                
//             })
//         })
        
        
//     } catch (error) {
//         console.log(error)
//     }
      
//  });
// // create product route
//  router.get('/admin/createproduct',authadmin, (req,res)=>{
//     try {
//         res.render("admin/createproduct",{userData:req.userData})
//     } catch (error) {
//         console.log(error)
//     }
      
//  });

// //  product list
//  router.get('/admin/productlist',authadmin, (req,res)=>{
//     try {
//         fetch(`http://163.53.182.187:5000/api/products/allproducts`)
//         .then(res => res.json())
//         .then(productlist =>{
//             console.log("productlist:",productlist)
//             res.render("admin/productlist",{productlist,userData:req.userData})
//         })
//     } catch (error) {
//         console.log(error);
//     } 
      
//  });


 
//  //  get single product
//  router.get('/admin/viewsingleproduct/:id',authadmin, (req,res)=>{
//     try {
//         fetch(`http://163.53.182.187:5000/api/products/singleproduct/${req.params.id}`)
//         .then(res => res.json())
//         .then(singleproduct =>{
//             console.log("singleproduct:",singleproduct)
//             res.render("admin/singleproduct",{singleproduct,userData:req.userData})
//         })
//     } catch (error) {
//         console.log(error);
//     } 
      
//  });

//  router.get('/admin/productstatusupdate/:id/:status',authadmin,(req,res)=>{
//     try {
//         fetch(`http://163.53.182.187:5000/api/products/updateproductstatus/${req.params.id}/${req.params.status}`)
//         .then(res => res.json())
//         .then(singleproduct =>{
//             console.log("singleproduct:",singleproduct)
//             res.render("admin/productlist",{productlist,userData:req.userData})
//         })
//     } catch (error) {
//         console.log(error);
//     } 
//  })

//   //  get order list
//   router.get('/admin/allorderlist',authadmin, (req,res)=>{
//     try {
//         fetch(`http://163.53.182.187:5000/api/order/getallorders`)
//         .then(res => res.json())
//         .then(orderlist =>{
//             res.render("admin/orderlist",{orderlist,userData:req.userData})
//         })
//     } catch (error) {
//         console.log(error);
//     } 
      
//  });

//    //  new order lsit
//    router.get('/admin/neworderlist',authadmin, (req,res)=>{
//     try {
//         fetch(`http://163.53.182.187:5000/api/order/getallordersbystatus/pending`)
//         .then(res => res.json())
//         .then(orderlist =>{
//             res.render("admin/neworderlist",{orderlist,userData:req.userData})
//         })
//     } catch (error) {
//         console.log(error);
//     } 
      
//  });
//    //  get single order
//    router.get('/admin/viewsingleorder/:id',authadmin, (req,res)=>{
//     try {
//         let total = 0;
//         fetch(`http://163.53.182.187:5000/api/order/order/${req.params.id}`)
//         .then(res => res.json())
//         .then(singleorder =>{
//             console.log("single order:",singleorder.order.orderitem)
//             singleorder.order.orderitem = singleorder.order.orderitem.map((item,idx)=>{
//                // item.price = parseInt(item.price) - item.discounted_price
//                 item.subtotal =( +(item.price)) * 1 - (item.price - item.discounted_price)
//                 total = total + item.subtotal
//                 return item
//             })
//             console.log("single order:",singleorder.order.orderitem)
//             res.render("admin/singleorder",{singleorder,userData:req.userData,total})
//         })
//     } catch (error) {
//         console.log(error);
//     } 
      
//  });

// //  order status update
//   router.get('/admin/updateorderstatus/:status/:id',authadmin, async(req,res)=>{
//     try {
//         const response =  await (fetch(`http://163.53.182.187:5000/api/order/orderstatusupdate/${req.params.status}/${req.params.id}`, 
//     { 
//         method: 'PUT', 
//         body: JSON.stringify(req.body),
//         headers: { 'Content-Type': 'application/json' }
//     }));
//     if(response.status === 200){
//         req.session.message={
//             type:'alert-success',
//             intro:'Created!',
//             message:'Data Updated'
//         }
//         res.redirect(`/admin/viewsingleorder/${req.params.id}`)
//     } 
//     console.log("response",response)  
//     } catch (error) {
//         console.log(error);
//     } 
      
//  });


 
// //    all clients
//    router.get('/admin/clientlist',authadmin, (req,res)=>{
//     try {
//         fetch(`http://163.53.182.187:5000/api/order/getallcustomers`)
//         .then(res => res.json())
//         .then(clientlist =>{
//             res.render("admin/clientlist",{clientlist,userData:req.userData})
//         })
//     } catch (error) {
//         console.log(error);
//     } 
      
//  });

// //  single client
// router.get('/admin/viewsingleclient/:id',authadmin, (req,res)=>{
//     try {
//         fetch(`http://163.53.182.187:5000/api/order/getsinglecustomerorderhistory/${req.params.id}`)
//         .then(res => res.json())
//         .then(clientData =>{
//             res.render("admin/singleclient",{clientData,userData:req.userData})
//         })
//     } catch (error) {
//         console.log(error);
//     }   
//  });

// //  find best client
// router.get('/admin/findbestclient',authadmin, (req,res)=>{
//     try {
//         res.render("admin/findbestclients",{userData:req.userData})
//     } catch (error) {
//         console.log(error);
//     }   
//  });


//  router.post('/admin/bestcustomer',authadmin, (req,res)=>{
//     try {
        
//         axios.post("http://163.53.182.187:5000/api/order/findbestclient",req.body)
//            .then(response =>{
//                res.render("admin/findbestclients",{CustomerData:response.data,userData:req.userData,bodyData:req.body,userData:req.userData})
//            })
//            .catch(err => console.log(err))
//     } catch (error) {
//        console.log("error",error)
//     }
// });

// // admin login
// router.get('/admin/login', (req,res)=>{
//     try {
//         res.render('admin/login')
//     } catch (error) {
//        console.log("error",error)
//     }
// });


// // admin login post
// router.post('/admin/login', (req,res)=>{
//     try {
        
//         axios.post("http://163.53.182.187:5000/api/admin/login",req.body)
//            .then(response =>{
//                console.log("response for login",response)
//                if(response.status === 200){
//                 res.render("admin/index",{loginData:response.data,bodyData:req.body})
//                }  
//            })
//            .catch(err =>{
//             res.render("admin/login",{bodyData:req.body,msg:'Invalid Credentials'})
//            })
//     } catch (error) {
//      res.render("admin/login",{bodyData:req.body,msg:'Invalid Credentials'})
//        console.log("error",error)
//     }
// });

// //admin login
// router.get('/admin/profile', authadmin, (req,res)=>{
//    res.render("admin/adminprofile",{userData:req.userData})
// });


// //get discount list 
// router.get('/admin/offerlist', authadmin, (req,res)=>{
    
//     try {
//         fetch(`http://163.53.182.187:5000/api/discount/getalldiscount`)
//         .then(res => res.json())
//         .then(offerlist =>{
//             res.render("admin/discountlist",{userData:req.userData,offerlist})
//         })
//     } catch (error) {
//         console.log(error);
//     } 
    
//  });


//  // admin/createoffer
// router.post('/admin/offerlist', authadmin, (req,res)=>{
//     try {
        
//         axios.post("http://163.53.182.187:5000/api/discount/adddiscount",req.body)
//            .then(response =>{
//                console.log("response for login",response)
//                if(response.status === 200){
//                 fetch(`http://163.53.182.187:5000/api/discount/getalldiscount`)
//                 .then(res => res.json())
//                 .then(offerlist =>{
//                     res.render("admin/discountlist",{userData:req.userData,offerlist,msg:'Success! New Offer Created',type:'success'})
//                 })
                
//                }  
//            })
//            .catch(err =>{
//             fetch(`http://163.53.182.187:5000/api/discount/getalldiscount`)
//             .then(res => res.json())
//             .then(offerlist =>{
//                 res.render("admin/discountlist",{userData:req.userData,offerlist,msg:"Invalid Data!!",type:'danger'})
//             })
            
//            })
//     } catch (error) {
//      res.render("admin/discountlist",{userData:req.userData,offerlist})
//        console.log("error",error)
//     }
// });


// // admin/updateoffer
// router.post('/admin/updateoffer', authadmin, (req,res)=>{
//     try {
        
//         axios.put(`http://163.53.182.187:5000/api/discount/updatesinglediscount/${req.body.discount_id}`,req.body)
//            .then(response =>{
//                console.log("response for login",response)
//                if(response.status === 200){
//                 fetch(`http://163.53.182.187:5000/api/discount/getalldiscount`)
//                 .then(res => res.json())
//                 .then(offerlist =>{
//                     res.render("admin/discountlist",{userData:req.userData,offerlist,msg:'Success! Data Updated',type:'success'})
//                 })
//                }  
//            })
//            .catch(err =>{
//             fetch(`http://163.53.182.187:5000/api/discount/getalldiscount`)
//             .then(res => res.json())
//             .then(offerlist =>{
//                 res.render("admin/discountlist",{userData:req.userData,offerlist,msg:"Invalid Data!!",type:'danger'})
//             })
            
//            })
//     } catch (error) {
//      res.render("admin/discountlist",{userData:req.userData,offerlist})
//        console.log("error",error)
//     }
// });

//  //get discount list 
// router.get('/admin/updateoffer', authadmin, (req,res)=>{
    
//     try {
//         fetch(`http://163.53.182.187:5000/api/discount/getalldiscount`)
//         .then(res => res.json())
//         .then(offerlist =>{
//             res.render("admin/discountlist",{userData:req.userData,offerlist})
//         })
//     } catch (error) {
//         console.log(error);
//     } 
    
//  });

//  //  single offer with product list
// router.get('/admin/viewsingleoffer/:id',authadmin, (req,res)=>{
//     try {
//         fetch(`http://163.53.182.187:5000/api/discount/getitemsbydiscountid/${req.params.id}`)
//         .then(res => res.json())
//         .then(prodcuctlist =>{
//             //console.log("single discunt product list:",prodcuctlist)
//             fetch(`http://163.53.182.187:5000/api/products/allproducts`)
//             .then(res => res.json())
//             .then(productlistAll =>{
//                 let discountedProduct = prodcuctlist.items.map((item,idx)=>{
//                     return item.product.id
//                 })
               
//                 productlistAll = productlistAll.filter(item => !discountedProduct.includes(item.id))
//                 console.log("discounted product:",discountedProduct) 
//                console.log("productlistAll:",productlistAll)
              
//                 res.render("admin/singleoffer-productlist",{prodcuctlist:prodcuctlist.items,discount:prodcuctlist.discount,userData:req.userData,productlistAll})
//             })
           
//         })
//     } catch (error) {
//         console.log(error);
//     }   
//  });


//  router.post('/admin/additemtooffer', async(req,res)=>{
//     try {
//         console.log("req.body",req.body)
//         if(!req.body.product_id){
//             req.session.message={
//                 type:'alert-warning',
//                 intro:'Created!',
//                 message:'No new item has been added!!'
//             }
//             res.redirect(`/admin/viewsingleoffer/${req.body.discount_id}`)
//         }else{
//             req.body.product_id.map((item,idx)=>{
//                 axios.post("http://163.53.182.187:5000/api/discount/additemtodiscount/1",{
//                     discount_id:req.body.discount_id,
//                     product_id:item
                
//                })
//                .then(response =>{
                
//                    //console.log("response for add user",response)
                  
//                })
//                .catch(err =>{
//                 req.session.message={
//                     type:'alert-warning',
//                     intro:'Created!',
//                     message:'AlReady Exist!!'
//                 }
//                 res.redirect(`/admin/viewsingleoffer/${req.body.discount_id}`)
//                  //console.log("error",err)
//                })
//             })

           
//             req.session.message={
//                     type:'alert-success',
//                     intro:'Created!',
//                     message:'New item has been added'
//              }
//              res.redirect(`/admin/viewsingleoffer/${req.body.discount_id}`)
            
//         }
        

      
//     } catch (error) {
//         console.log("error",error);
//     }   
//  });
// // remove item from discount
//  router.get('/admin/removeitem/:product_id/:discount_id', async(req,res)=>{
//     try {
//         axios.delete(`http://163.53.182.187:5000/api/discount/removeitemfromdiscount/${req.params.product_id}/${req.params.discount_id}`)
//        .then(response =>{
//         req.session.message={
//             type:'alert-success',
//             intro:'Created!',
//             message:'Product Removed from this discount!!'
//         }
//          res.redirect(`/admin/viewsingleoffer/${req.params.discount_id}`)
//        })
//        .catch(err =>{
//         req.session.message={
//             type:'alert-warning',
//             intro:'Created!',
//             message:'Can not be deleted!!'
//         }
//          res.redirect(`/admin/viewsingleoffer/${req.params.discount_id}`)
            
//       })
//     } catch (error) {
//         console.log("error",error);
//     }   
//  });
//   //get code list
//   router.get('/admin/code', authadmin, (req,res)=>{
    
//     try {
//         fetch(`http://192.168.0.249:5000/api/auth/getallcodes`)
//         .then(res => res.json())
//         .then(codelist =>{
//             res.render("admin/codelist",{userData:req.userData,codelist})
//         })
//     } catch (error) {
//         console.log(error);
//     } 
    
//  });

//--------------------------------------------------------------------------------- medicine end--------------------------------------- 














module.exports =  router;