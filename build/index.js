(()=>{"use strict";const e=window.wc.wcBlocksRegistry,t=window.wp.element,a=window.wp.i18n,n=window.wp.htmlEntities,l="rave",r=window.wc.wcSettings,o=()=>{const e=(0,r.getSetting)("rave_data",null);if(!e)throw new Error("Flutterwave initialization data is not available");return e};var i,c;const w=()=>(0,t.createElement)("div",null,(0,n.decodeEntities)(o()?.description||(0,a.__)("You may be redirected to a secure page to complete your payment.","rave-woocommerce-payment-gateway"))),m=null!==(i=o()?.asset_url)&&void 0!==i?i:null,s={name:l,label:(0,t.createElement)("div",{style:{display:"flex",flexDirection:"row",rowGap:".5em",alignItems:"center"}},(0,t.createElement)("img",{src:`${m}/img/flutterwave-full.svg`,alt:(0,n.decodeEntities)(o()?.title||(0,a.__)("Flutterwave","rave-woocommerce-payment-gateway"))}),(0,t.createElement)("b",null,(0,t.createElement)("h4",null,"Flutterwave"))),placeOrderButtonLabel:(0,a.__)("Proceed to Flutterwave","rave-woocommerce-payment-gateway"),ariaLabel:(0,n.decodeEntities)(o()?.title||(0,a.__)("Payment via Flutterwave","rave-woocommerce-payment-gateway")),canMakePayment:()=>!0,content:(0,t.createElement)(w,null),edit:(0,t.createElement)(w,null),paymentMethodId:l,supports:{features:null!==(c=o()?.supports)&&void 0!==c?c:[]}};(0,e.registerPaymentMethod)(s)})();