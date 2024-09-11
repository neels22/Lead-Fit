




/// async function 
    // always returns a promise
    // if value is returned it will be wraped inside a promise
    // if you are returning a promise it wont be wraped the promise will be returned as it is


// const p = new Promise((resolve, reject) => {
//     resolve('after it resolves')
// })

// async function getdata() {
//     return p
// }

// const data = getdata();
// data.then((res) =>{
//     console.log(res)
// })




    /// use of async await 
    // they are used to handle promises 
    // before async await how do we used to handle promises ??? --->> 


    const pw = new Promise((resolve, reject) => {

        setTimeout(()=>{
            resolve('normal function promises')
        },10000)
       
    })



    const pw2 = new Promise((resolve, reject) => {

        setTimeout(()=>{
            resolve('pw2 function promises')
        },5000)
       
    })

    function getd() {

        // js enginer will not wait for promise to be resolved 

        pw.then(res => console.log(res))
        console.log('namaster first')
    }
    getd()
    
    //// after async await 
    // await promise -- that value will contain the value of resolved promise
    // await can only used inside async function 
    // 


    /// async is not in the call stack 
    //  



    async function handler() {


        /// here the below code after the promise wont be executed it first wait for promise to get resolved then it will be executed

        // basically was waiting at line where await was used 

        /// 
        console.log(' before any promise')
        const val = await pw

        console.log('\n this is from asycn await')

        console.log(val)
        console.log('this is from asycn await')


        //// what is happening ??
        //  the js enginer puts these both promises at a time 
        // but first it will wait for the upper one to get resolved so even if the lower one has less time it wont be executed but it is being resolved somewhere 
        

        const val2 = await pw2

        console.log('\n this is from asycn await for 5 sec')

        console.log(val2)
        console.log('this is from asycn await for 5 sec')
    }

    handler()

    /// difference 
    // when normally resolving a promise the program would execute below the promsie 
    // but when done with async await the code is not executed first the promise is waited for it to get resolved then the below code is executed 



    ///////////////////////////////////////////////////////////

    //// fetch returns a response
    // when promise is resolved it gives you response object 
    // response body is readable stream 
    // convert to json using .json which return again a promise
    // 

    /// error handling is done using try catch 


    const api_url = "https://newsapi.org/v2/everything?q=tesla&from=2024-08-10&sortBy=publishedAt&apiKey=47ce72639d634439914895bac54942ad"

    async function getgithub() {

        try {
            const data  = await fetch(api_url)
            const res = await data.json()
             console.log(res)

            
        } catch (error) {
            console.log(error + 'adsfa')
        }
     
    }

    getgithub()

    ///////////////////////////////////////////////////////////

    // async await is syntactic sugar over .then and .catch 
    // you dont have to do callback handling here 
    // 