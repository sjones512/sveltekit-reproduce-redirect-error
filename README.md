# A minimal reproduction of some slightly confusing sveltekit form behavior

To reproduce:
* Have a link to a route that throws a redirect to a sign in page if the user is not authenticed
* Have a sign in form that redirects to the same route, with use:enhance
* The sign in page also probably needs a redirect on login to the protected home page

1. Hover over the link to the protected route so it is prefeteched. The redirect is cached
2. Sign in, the POST call is made to the server, but then the redirect is handled client side by goto. It uses the cached redirect back to /signin
3. You are now signed in, which redirects you back to the protected home page
4. You end up in a redirect loop.

Initially I thought this was a bug since you only got the 500 error after hovering the protected link, but now am thinking it is probably the intended behavior. Tt was just difficult to track down since it only presents itself when you use:enhance.


