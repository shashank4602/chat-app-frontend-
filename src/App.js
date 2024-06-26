import './App.css'
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
const projectID = "c16ee732-b5a4-4c82-9aa7-9fd83a777fe6"


const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};
export default App;