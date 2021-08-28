import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormButton, Input } from 'components/Form'
import { Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { HOME_PATH, SIGN_UP_PATH } from 'utils/constants'
import { useLogin } from 'hooks'

const loginSchema = yup.object().shape({
    email: yup.string().required('Please enter your email'),
    password: yup.string().required('Please Enter your password'),
})

const LoginForm = () => {
    const router = useRouter()

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    })
    const { mutate: loginUser, isLoading } = useLogin({
        onSuccess: (response) => {
            window.localStorage.setItem('token', response.data.token)
            router.push(HOME_PATH)
        },
        onError: (error) => {
            console.log(error)
        },
    })

    const onSubmit = (data) => {
        console.log(data)
        loginUser(data)
    }

    return (
        <VStack spacing="100px">
            <VStack spacing="0.5rem" as="form" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="Email address"
                    placeholder="Email address"
                    type="email"
                    error={errors.email?.message}
                    {...register('email')}
                />
                <Input
                    label="Password"
                    placeholder="Password"
                    mb="0.5rem"
                    type="password"
                    error={errors.password?.message}
                    {...register('password')}
                />
                <FormButton isLoading={isLoading} type="submit">
                    LOGIN
                </FormButton>
            </VStack>
            <VStack spacing="0.5rem">
                {/* eslint-disable-next-line*/}
                <Text>{"Don't have an account?"}</Text>
                <FormButton inverse onClick={() => router.push(SIGN_UP_PATH)}>
                    SIGN UP NOW
                </FormButton>
            </VStack>
        </VStack>
    )
}

export default LoginForm