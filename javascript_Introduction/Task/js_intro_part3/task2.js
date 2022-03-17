const getMonth = (callback) => {
    setTimeout(()=>{
        let error = true
        let month = ['Januari','Februari','Maret','April',
    'Mei','Juni','Juli','Agustus','September','Oktober',
    'November', 'Desember']
    if(!error){
        callback(null, month)
    }else{
        callback(new Error('Sorry Data Not Found'), [])
    } 
    }, 4000)
}

const showMonth = (iserror,month) =>{
    if(iserror==null){
        month.map(temp => console.log(temp))
    }else{
        console.log(iserror)
    }    
}

getMonth(showMonth)
