console.log("vue ok",Vue)
const root = new Vue ({
    el:'#root',
    data:{
        firstName:"Stefano",
        lastName: "De Rosa",
        classRoom: "CLASSE 68",
        
    },
    methods:{
        scopriLaClasse(){
            alert(this.classRoom)
        },
        
    }
});
