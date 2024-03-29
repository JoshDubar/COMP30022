import React from 'react'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Template, Container } from 'components/Dashboard'
import { HStack, VStack, useToast } from '@chakra-ui/react'
import { FormButton, Input, DeleteConfirm } from 'components/Form'
import { useRouter } from 'next/router'
import { useGrade, useEditGrade, useDeleteGrade } from 'hooks'
import { createErrorMessage } from 'utils'
import { Toast } from 'components'

const editGradeSchema = yup.object().shape({
    gradeName: yup.string().max(20, 'Grade Name must be at most 20 characters'),
    gradeDifficulty: yup.string(),
    gradeGender: yup.string(),
})

const edit = () => {
    const router = useRouter()
    const toast = useToast()

    const { grade } = useGrade()

    const [isOpen, setIsOpen] = React.useState(false)
    const onClose = () => setIsOpen(false)

    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(editGradeSchema),
    })

    const { mutate, editIsLoading, editIsSuccess } = useEditGrade({
        onSuccess: (response) => {
            toast({
                render: () => <Toast title="Successfully updated grade" type="success" />,
                position: 'top',
                duration: 5000,
            })
            router.push(
                window.location.pathname
                    .split('/')
                    .slice(0, window.location.pathname.split('/').length - 2)
                    .concat([response?.data?.data?._id, 'rounds'])
                    .join('/')
            )
        },
        onError: (error) => {
            const errMsg = error.response?.data?.error
            toast({
                render: () => (
                    <Toast
                        title={createErrorMessage(errMsg, '', 'Error editing Grade')}
                        type="error"
                    />
                ),
                position: 'top',
                duration: 5000,
            })
        },
    })

    const deleteGrade = useDeleteGrade({
        onSuccess: () => {
            router.push(
                window.location.pathname
                    .split('/')
                    .slice(0, window.location.pathname.split('/').length - 2)
                    .join('/')
            )
        },
        onError: (error) => {
            console.log(error)
        },
    })

    const onSubmit = (data) => {
        mutate(Object.assign({ _id: grade._id }, data))
    }

    React.useEffect(() => {
        reset({
            gradeName: grade?.name,
            gradeGender: grade?.gender,
            gradeDifficulty: grade?.difficulty,
        })
    }, [grade])

    return (
        <Template>
            <Head>
                <title>Dribblr | Edit a Grade</title>
            </Head>
            <Container heading="Update Grade" minH="unset" w="unset !important">
                <DeleteConfirm
                    isOpen={isOpen}
                    onClose={onClose}
                    onDelete={deleteGrade}
                    toDeleteText="Grade"
                />
                <VStack
                    marginleft={['0', '2rem']}
                    as="form"
                    spacing="2rem"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input
                        label="Grade name"
                        placeholder={grade?.name}
                        error={errors.gradeName?.message}
                        {...register('gradeName')}
                        width="100%"
                    />

                    <HStack w="100%">
                        <Input
                            label="Grade gender"
                            type="select"
                            placeholder={false}
                            error={errors.gradeGender?.message}
                            {...register('gradeGender')}
                        >
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="mixed">mixed</option>
                        </Input>

                        <Input
                            label="Level"
                            type="select"
                            placeholder={false}
                            error={errors.gradeDifficulty?.message}
                            {...register('gradeDifficulty')}
                        >
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                        </Input>
                    </HStack>

                    <HStack spacing="0.5rem">
                        <FormButton onClick={() => router.back()}>Back</FormButton>
                        <FormButton
                            type="submit"
                            color="black"
                            bg="orange"
                            isLoading={editIsLoading || editIsSuccess}
                        >
                            Update
                        </FormButton>
                    </HStack>
                    <HStack>
                        <FormButton bg="red" onClick={() => setIsOpen(true)}>
                            Delete Grade
                        </FormButton>
                    </HStack>
                </VStack>
            </Container>
        </Template>
    )
}

export default edit
