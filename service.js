function getAll(){
    const respon = axios.get("http://localhost:8080/stokhijab/tsaniyastore")
    const dr = respon.then(resp => resp.data)
    return dr
}

async function create(data){
    await axios.post("http://localhost:8080/stokhijab/tsaniyastore", data)
    .then((result) => {
        console.log(result)
        return result.data
    }).catch((err) => {
        console.error(err)
    });
}
    
async function update(data){
    await axios.put("http://localhost:8080/stokhijab/tsaniyastore", data)
    .then((result) => {
        console.log(result)
        return result.data
    }).catch((err) => {
        console.error(err)
    });
}

async function del(data){
    await axios.delete("http://localhost:8080/stockhijab/tsaniyastore", data)
    .then((result) => {
        console.log(result)
        return result.data
    }).catch((err) => {
        console.error(err)
    });
}
