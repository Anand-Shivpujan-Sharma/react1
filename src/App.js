import React from 'react';
import ChatBot from 'react-simple-chatbot';
import {Segment} from  'semantic-ui-react';

function App(){
    const steps=[
        {
            id:'greet',
            message:'hello',
            trigger:"ask name"
                               
        },{
            id:'ask name',
            message:'please enter your name',
            trigger:'waiting'
        },{
           id:'waiting',
           user:true,
           trigger:'name'
        },{
            id:'name',
            message:'hi {previousValue},please select your issue',
            trigger:'issue'
        },{
            id:'issue',
            option:[
                {value:'React',label:'react',trigger:'react'},
                {
                    value:'angule',label:'anguale',trigger:'angulr'
                }

            ],
        },{
            id:'react',
            message:'thank you for talking your react issue',
            end:true
        },{
            id:'angule',
            message:'thank you for talking your angule issue',
            end:true
        }
    ]
    return <>
        <Segment floated='right'>
            <ChatBot steps={steps}/>
        </Segment>
    </>;

}
export default App;