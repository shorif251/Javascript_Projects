const spaceTrimmer = (txt) =>{
    const removeSpace = txt.split(" ").filter((v)=> v != '').join(' ')
    return removeSpace.toString()
}

