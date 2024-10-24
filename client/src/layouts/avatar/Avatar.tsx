import { useContext } from 'react'
import { AvatarContext } from '../../common/context/AvatarContext'



export const Avatar = () => { 
    const context = useContext(AvatarContext)
    
    if (!context) {
        return <div>Error: AvatarContext no está disponible</div>;
    }
    
    const { avatarState, setAvatarState, ActiveForm, setActiveForm, ResetAvatar } = context
    
    console.log('Context:', context);
    console.log('avatarState:', avatarState);
    console.log('ActiveForm:', ActiveForm);
    
    return (
        <div>
        
        </div>
    )
}

