import { useQuery } from 'react-query'
import { getUserAuthenticationData } from '../../api/auth/getUserAuthenticationData'

export const authCacheKey = 'userauth'

export const useGetUserAuthenticationData = () => {
    return useQuery(authCacheKey, getUserAuthenticationData)
}
