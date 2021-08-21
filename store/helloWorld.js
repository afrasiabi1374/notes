export const  state = () =>({
    notes:[
        {
            id: 1,
            title: "cleane kitchen",
            text: "you should clean kitchen",
            tags: [1, 2]
        },
        {
            id: 2,
            title: "do home work",
            text: "do math physics and programming with c++",
            tags: []
        },
        {
            id: 3,
            title: "football playing",
            text: "go to stadium azadi an dplay football",
            tags: []
        },
        {
            id: 4,
            title: "help to ali",
            text: "goo to his home and help to his parent",
            tags: []
        },
        {
            id: 5,
            title: "go to gym",
            text: "go to gym and give program ",
            tags: []
        },
        {
            id: 6,
            title: "english",
            text: "go to english language class",
            tags: []
        },
        {
            id: 7,
            title: "programming exersize",
            text: "do programming exersise with vue",
            tags: [3, 2]
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
            name:" imagine"
        },
        {
            id:5,
            name:"important!"
        },
        {
            id:6,
            name:"dreams."
        },
        {
            id:7,
            name:"happy"
        },
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
export const getters = {
    tagLabel: (state) => (tid) => {
        // console.log('ffffffffff');
        // return tid
        // return tid
        return '# '+state.tags.find(t => t.id == tid).name
    }
}