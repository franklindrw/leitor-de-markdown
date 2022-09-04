import fetch from "node-fetch";

function manejaErros(err){
    throw new Error(err.message);
}

export default async function validaUrl(arrayDeLinks){
    const links = geraArrayDeURLs(arrayDeLinks);
    const statusLinks = await checaStatus(links);
    
    // spred operator
    const resultados = arrayDeLinks.map((objeto, index) => ({
        ...objeto,
        status: statusLinks[index],
    }))
    return resultados;
}

function geraArrayDeURLs(arrayLinks){
    return arrayLinks.map(objLink => Object.values(objLink).join());
}

async function checaStatus(arrayUrls){
    try{
        //promisses e async e await
        const arrayStatus = await Promise
            .all(
                arrayUrls.map(async url => {
                    const res = await fetch(url);
                    return res.status;
                })
        );

        return arrayStatus;
    } catch(err) {
        manejaErros(err);
    }
}