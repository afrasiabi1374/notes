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
       {id:3,name:"Change the world by being yourself."},
       {id:4,name:"Everything you can imagine is real."},
       {id:5,name:"Never regret anything that made you smile."},
       {id:6,name:"Die with memories, not dreams."},
       {id:7,name:"Aspire to inspire before we expire."},
   ]

})
export const mutations = {
    deleteNote(state,noteIndex){
   
             state.notes.splice(noteIndex,1);
        },
    updateNote(state,editVal){
        console.log(editVal.title);
        state.notes[editVal.id].title = editVal.title;
        state.notes[editVal.id].text = editVal.text;


        //    state.notes[1].text = "editVal.text";
        //    state.notes[1].title = "editVal.title";

    }
}