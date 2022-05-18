function isString(x: string | number): x is string {
    return typeof x === 'string';
}

function isAdmin(user: UserCast | AdminCast): user is AdminCast {
    return 'role' in user;
}
