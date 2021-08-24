import { fireEvent, render, screen } from '@testing-library/react';
import { signIn } from 'next-auth/client';
import { mocked } from 'ts-jest/utils';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

import { SubscribeButton } from '.';

jest.mock('next-auth/client')

jest.mock('next/router')

describe('SubscribeButton component', () => {
  it('renders correctly', () => {
    const useSessionMocked = mocked(useSession)
  
    useSessionMocked.mockReturnValue([null, false]);
     render (
      <SubscribeButton />
    )

  })

  it('redirects user to signin when not authenticated', () => {
    const signInMocked = mocked(signIn);
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValue([null, false]);

    render (
      <SubscribeButton />
    )
      const subscribeButton = screen.getByText('Subscribe now');

    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalled()

  })
  
  
  it('redirects to posts when user already subscription', () => {
    const signIngMocked = mocked(signIn)
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValue([
      {
        user: {
          name: 'Jhon Doe', 
          email: 'jhondoe@gmail.com'
        }, 
        activeSubscription: 'fake-active-subs',
        expires: 'fake-expires'
      }, 
      false
    ]);
    render (
      <SubscribeButton />
    )
      const subscribeButton = screen.getByText('Subscribe now');

    fireEvent.click(subscribeButton)

    expect(signIngMocked).toHaveBeenCalled()

  })  
})
