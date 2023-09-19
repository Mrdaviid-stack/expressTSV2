import _ from "lodash";

export function capitalizeEveryWord(text: string) {
    return text
        .replace("_", " ")
        .split(" ")
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
}

export function formatValidationsError(errors: any) {
    const newError = []
    for (const i in errors.errors) {
        let newErr = {
            label: capitalizeEveryWord(errors.errors[i].path),
            message: capitalizeEveryWord(errors.errors[i].msg)
        }
        newError.push(newErr)
    }
    return newError
}
