# AuthMeReloaded Password Checking In JS

This package was created for easy password verification in the AuthMeReload plugin from minecraft plugin.

Package was rewriten by me from php to js.
There will be updates to this package to change password and delete password.

## How to youse package ?

First import package

```
import checkPassword from "authme-password-check"
```

Than you can use `checkPassword` function like this:

```
const pwCheck = checkPassword(password, databasePassword);
```

Fucntion will return `true` if passwords match, otherwise `false`

## Testing package

```
const databasePassword = "$SHA$dc991e87ddb674f1$9c27ce343ccee87be3dca9c1f7aac79abe2f71abd7cb2825006f0a64bafdd361" // test in hashed format (from db)
const password = "test" // password that you want to compare

const pwCheck = checkPassword(password, databasePassword) // save function to pwCheck
console.log(pwCheck) // console log
```

From Radoslav (Nezo96) with ❤
