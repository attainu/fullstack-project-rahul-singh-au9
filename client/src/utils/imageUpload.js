import config from '../config'


export const imageUpload = async (images) => {
    let imgArr = []
    for(const item of images){
        const formData = new FormData()
        formData.append("file", item)
        formData.append("upload_preset", config.CLOUD_UPDATE_PRESET)
        formData.append("cloud_name", config.CLOUD_NAME)

        const res = await fetch(config.CLOUD_API, {
            method: "POST",
            body: formData
        })

        const data = await res.json()
        imgArr.push({public_id: data.public_id, url: data.secure_url})
    }
    return imgArr;
}