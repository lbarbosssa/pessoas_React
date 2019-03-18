//ACTION TYPE
const HELLO =  'HELLO'

//ACTION CREATORS
export const hello = (data) => {
    //console.log('dados Hello -> ', data)
    return {
        type: HELLO,
        payload: {
            msg: 'Redux deu certo',
            data
        }
    }
}
