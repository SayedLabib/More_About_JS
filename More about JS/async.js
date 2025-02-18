
const myLoader = () =>
    {
        return new Promise((resolve, reject) =>
            {
              const success = Math.random();
              
              if(success<=0.5)
                {
                    console.log(resolve(success));
                    
                }
                else
                {
                    console.log(reject(success));
                    
                }
            });
    }

myLoader()
.then (data => console.log('resolved', data))
.catch (err => console.log('reject with error',err))
