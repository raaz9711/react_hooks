import {UserContext,ChannelContext} from '../../../App'
// import {ChannelContext} from '../../../App'

const ComponentE = () => {

    return(
    <div>
        <div>E</div>
        <div>final</div>
        <UserContext.Consumer>
            {
                user => { 
                    return (
                    <ChannelContext.Consumer>
                        {
                        channel => {

                      return (
                         <div>User name is {user} | {channel} </div>
                      )
                        }
                    }
                    </ChannelContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
    </div>
    )
}

export default ComponentE