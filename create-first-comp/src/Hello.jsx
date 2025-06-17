function Hello(){
    let mymessage='What a lovely day today is.'
    let greetings=()=>{
        return mymessage;
    }
    return <p>
        Hello!Good Morning, {greetings()}
    </p>
}
export default Hello; 