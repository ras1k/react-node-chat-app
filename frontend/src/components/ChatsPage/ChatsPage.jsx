import {
    MultiChatSocket,
    MultiChatWindow,
    useMultiChatLogic,
} from 'react-chat-engine-advanced';

// const CHAT_ENGINE_PROJECT_ID = import.meta.env.CHAT_ENGINE_PROJECT_ID;

const ChatsPage = (props) => {

    const chatProps = useMultiChatLogic(
        'fc7521a7-01a9-4d7d-8386-f06125a46b0e',
        props.user.username,
        props.user.secret
    );

    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
    );
};

export default ChatsPage;