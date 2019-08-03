const fs=require('fs');
const chalk=require('chalk')
const addNote=function(title,body){
    const list=listNote();
    const duplicate=list.filter(function(note){
        return note.title===title;
    })
    if(duplicate.length==0){
        list.push({
            title:title,
            body:body
        })
        saveNote(list);
        console.log(chalk.blue.inverse("Note added"));
    }
  else{
      console.log(chalk.red.inverse("title already exists"));
  }
       
}
const removeNote=function(title){
    const list=listNote();
    const duplicate=list.filter(function(note){
        return note.title!==title;
    })
    if(list.length>duplicate.length){
        console.log(chalk.green.inverse("REMOVING SUCCESSFUL"))
          saveNote(duplicate);
    }
    else if(list.length==duplicate.length){
        console.log(chalk.red.inverse("TITLE DOES NOT EXIST"))
    }
}
const saveNote=function(note){
    const data=JSON.stringify(note);
    fs.writeFileSync('notes.JSON',data);
}
const listNotes=function(){
    const list=listNote();
    list.forEach((note) => {
        console.log(note.title) 
    });
      
}
const listNote=function(){
    try{
        const data=fs.readFileSync('notes.JSON');// this returns kind of numbers so using toString
        const data2=data.toString();
        //console.log(data2);
        return JSON.parse(data2);

    }catch(e){
        return [];
    }
}
const readNote=function(title){
    const list=listNote()
    const note=list.find((note)=>note.title===title)
    if(note){
    console.log(chalk.inverse(note.title))
    console.log(note.body)
    }
    else{
        console.log("Does not exist")
    }
}
module.exports={
    addNote:addNote,
    listNotes:listNotes,
    removeNote:removeNote,
    readNote:readNote
}