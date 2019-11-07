import React, { Component } from 'react'
export default class Content extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            e:''
        }
        
    }
    componentDidMount(){
        let page = this.props.match.params.id;
        let list = this.props.location.pathname.slice(9);
        
        fetch('https://cnodejs.org/api/v1/topics?page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                
                this.setState({
                    data: res.data,
                    e:list
                });
            })
    }
    componentDidUpdate(prevProps){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let get = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?page='+get)
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res)
                    this.setState({
                        data: res.data
                    });
                })
        }
    }
    render(){
        return (
            <div>
                {
                this.state.data.map((item)=>{
                    console.log(this.state.e===item.id);

                    if(this.state.e===item.id){
                        return(
                            <div style={{marginLeft:"40px"}}>
                                { 
                                    <div style={{background:"white",width:"850",overflow:"hidden",color:"black"}} key={item.id}>
                                        <img style={{height:"30px",width:"30px"}} src={item.author.avatar_url}/>
                                        <h1>{item.title}</h1>
                                        <div dangerouslySetInnerHTML={{__html:item.content}}></div>
                                    </div>
                                }
                            </div>
                        ) 
                    }
                })
                }   
            </div>
        )
    }
}
