export default class Validator {
  constructor() {

  }

  static add(name, fn) {
    Validator.prototype[name] = fn;
  }

  validate(data, rules) {
    let errors = {}
    rules.forEach((rule) => {
      let value = data[rule.key]
      if (rule.required) {
        let error = this.required(value)
        if (error) {
          ensureObject(errors, rule.key)
          errors[rule.key].required = error;
          return
        }
      }

      // 遍历validator
      let validators = Object.keys(rule).filter(key => key !== 'key' || key !== 'required')
      validators.forEach((validatorKey) => {
        // rule.key
        if (this[validatorKey]) {
          let error = this[validatorKey](value, rule[validatorKey])
          if (error) {
            ensureObject(errors, rule.key)
            errors[rule.key][validatorKey] = error;
          }
        } else {
          throw 'invalid validator rule: ' + validatorKey
        }

      })

    })
  }

  required(value) {
    if (value !== 0 && !value) {
      return '必填'
    }
  }

  pattern(value, pattern) {
    if (pattern === 'email') {
      pattern = /^.+@.+$/
    }
    if (pattern.test(value) === false) {
      return '格式不正确'
    }
  }
  minLength(value, minLength) {
    if (value.length < minLength) {
      return '太短'
    }
  }

  maxLength(value, maxLength) {
    if (value.length > minLength) {
      return '太长'
    }
  }
}



