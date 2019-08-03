const fs=require('fs');
const utils=require('./utils')
const yargs=require('yargs')
yargs.command({
    command:"add",
    describe:"adding a note",
    builder:{
        title:{
            describe:"title of note",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"content of note",
            demandOption:true,
            type:"string"
        }
    },
    handler: function(argv){
        utils.addNote(argv.title,argv.body);
    }

})
yargs.command({
    command:"remove",
    describe:"removes a note",
    builder:{
    title:{
        describe:"note to be removed",
        demandOption:true,
        type:"string"
    }
    },
    handler:function(argv){
        utils.removeNote(argv.title)
    }
})
yargs.command({
    command:"list",
    describe:"listing the notes",
    handler:function(){
        utils.listNotes()
    }
})
yargs.command({
    command:"read",
    describe:"Reading Note",
    builder:{
        title:{
            descibe:"notes read",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv) {
        utils.readNote(argv.title)
    }
})
yargs.parse();