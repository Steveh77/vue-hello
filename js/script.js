console.log("vue ok",Vue)
const root = new Vue ({
    el:'#root',
    data:{
        firstName:"Stefano",
        lastName: "De Rosa",
        classRoom: "CLASSE 68",
        logo:"https://yt3.ggpht.com/ytc/AKedOLTO2XVhtyMr24Dnz6QJ-Lsj_05XHim-qMoF6PRc=s900-c-k-c0x00ffffff-no-rj"
        
    },
    methods:{
        scopriLaClasse(){
            alert(this.classRoom)
        },
        
    }
});
