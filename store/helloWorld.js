export const  state = () =>({
    notes:[
        {
            id: 1,
            title: "cleane kitchen",
            text: "you should clean kitchen",
            tagsId: [2, 5, 7],
            archived:false
        },
        {
            id: 2,
            title: "do home work",
            text: "do math physics and programming with c++",
            tagsId: [2],
            archived:false
        },
        {
            id: 3,
            title: "football playing",
            text: "go to stadium azadi an dplay football",
            tagsId: [2],
            archived:false
        },
        {
            id: 4,
            title: "help to ali",
            text: "goo to his home and help to his parent",
            tagsId: [],
            archived:false
        },
        {
            id: 5,
            title: "go to gym",
            text: "go to gym and give program ",
            tagsId: [6],
            archived:false
        },
        {
            id: 6,
            title: "english",
            text: "go to english language class",
            tagsId: [],
            archived:false
        },
        {
            id: 7,
            title: "programming exersize",
            text: "do programming exersise with vue",
            tagsId: [],
            archived:false
        },
    ],
    tags:[
        {
            id:1,
            name:"never giv up."
        },
        {
            id:2,
            name:"Just do it"
        },
        {
            id:3,
            name:"strong"
        },
        {
            id:4,
            name:"imagine"
        },
        {
            id:5,
            name:"important!"
        },
        {
            id:6,
            name:"dreams"
        },
        {
            id:7,
            name:"happy"
        },
    ],
    colors:[
        {
            colorLabel:"white",
            colorVal:"white"
        },
        {
            colorLabel:"purple",
            colorVal:"#9b5de5"
        },
        {
            colorLabel:"pink",
            colorVal:"#f15bb5"
        },
        {
            colorLabel:"yellow",
            colorVal:"#fee440"
        },
        {
            colorLabel:"blue",
            colorVal:"#00bbf9"
        },
        {
            colorLabel:"cyan",
            colorVal:"#00f5d4"
        },
        {
            colorLabel:"holo",
            colorVal:"#e75874"
        },
        {
            colorLabel:"soorati-kamrang",
            colorVal:"#fbcbc9 "
        },
        {
            colorLabel:"orange",
            colorVal:"#d2601a"
        },
        {
            colorLabel:"flamingo",
            colorVal:"#ed3572"
        },
        {
            colorLabel:"zeytooni",
            colorVal:"#829079"
        },
        {
            colorLabel:"firooze2",
            colorVal:"#1fbfb8"
        },
    
    ]
})

export const mutations = {
    saveNote(state, note){
        note.id?
            state.notes[state.notes.findIndex(n => n.id == note.id)] = note:
            state.notes.push({...note, id: 1 + state.notes.length,archived:false});
        },
    deleteNote(state, note){
        state.notes.splice(state.notes.findIndex(n => n.id == note.id), 1);

    },
    archiver(state,noteId){
       console.log(state.notes.find(note=>note.id==noteId).archived = !state.notes.find(note=>note.id==noteId).archived);
        
    }

}
export const getters = {
    tagLabel: (state) => (tid) => {
        // console.log('ffffffffff');
        // return tid
        // return tid
        return '# '+state.tags.find(t => t.id == tid).name;

    },

    notesByTag:(state) => (tagID) => {
        // console.log('dddddddddddd', parseInt(tagID);
        // tagID = parseInt(tagID)
        // console.log(state.notes.filter(note=>note.tagsId == tagID));
        // state.notes.filter(note => console.log(note.tagsId.includes(0+tagID)) )
        // console.log('ddddddddd', tagID, state.notes.filter(note => note.tagsId.includes(tagID) ));
        return state.notes.filter(note => note.tagsId.includes(parseInt(tagID)) )
    },

    showUnarchived:(state)=>{
        return state.notes.filter(note=>note.archived === false)
    },

    archivedOrUnarchivedNotes:(state) => (archive, tagId = null) => {
        return state.notes.filter( note => {
            return note.archived === archive && (tagId? note.tagsId.includes(parseInt(tagId)): true)
        })
    }

}
