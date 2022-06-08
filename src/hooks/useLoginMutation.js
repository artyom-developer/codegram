import { useMutation, gql } from '@apollo/client'

const LOGIN = gql`
    mutation login($input: UserCredentials!){
        login(input: $input)
    }
`

export const useLoginMutation = () => {
const [loginMutation, { error, loading }] = useMutation(LOGIN)

return { loginMutation, errorLogin: error, loadLogin: loading }
}