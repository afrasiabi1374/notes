export const  state = () =>({
    notes:[
        {id:1,title:"cleane kitchen",text:"you should clean kitchen"},
        {id:2,title:"do home work",text:"do math physics and programming with c++"},
        {id:3,title:"football playing",text:"go to stadium azadi an dplay football"},
        {id:4,title:"help to ali",text:"goo to his home and help to his parent"},
        {id:5,title:"go to gym",text:"go to gym and give program "},
        {id:6,title:"english",text:"go to english language class"},
        {id:7,title:"programming exersize",text:"do programming exersise with vue"},
    ],
   tags:[
       {id:1,name:"never giv up."},
       {id:2,name:"Just do it"},
       {id:3,name:"strong"},
       {id:4,name:" imagine"},
       {id:5,name:"important!"},
       {id:6,name:"dreams."},
       {id:7,name:"happy"},
   ]

})
export const mutations = {

    createNote(state,note){
        let lastElement = state.notes.length;
        note.id = lastElement+1;
        state.notes.push(note);
        
        console.log(note.id)
    },

    updateNote(state, note){
        // console.log(note.text);
        // console.log(note.title);
        state.notes[state.notes.findIndex(n => n.id == note.id)].title = note.title
        state.notes[state.notes.findIndex(n => n.id == note.id)].text = note.text
    },

    deleteNote(state, note){
        state.notes.splice(state.notes.findIndex(n => n.id == note.id), 1);
    },


}