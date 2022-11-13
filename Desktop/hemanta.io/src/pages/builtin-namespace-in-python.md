---
title: "Built-in Namespace in Python"
date: "2022-02-26"
excerpt: "The built-in namespace is one of the four types of namespaces that exist in Python."
categories: ["Python"]
---

###### Learn about namespaces in Python in my blogpost [here](https://hemanta.io/names-and-namespaces-in-python/).

![Built-in Namespace](../images/namespace/namespace.png)

One of the four types of namespaces that exist in Python is the built-in namespace.

Functions like ~~print()~~ and ~~str()~~ are available to us in all our programs because they exist in the highest level of namespaces and thus can be called in any program we write.

Whenever we run a Python application, we are provided a built-in namespace that is created when the interpreter is started and has a lifetime until the interpreter terminates (usually when our program is finished running). Since Python provides the namespace, these objects are accessible without the need to import a separate module.

We can take a look at the standard built-in namespace using the following statement:

```py {numberLines}
print(dir(__builtins__))
```

This allows us to access the ~~builtins~~ module that Python provides for us. The output would give us:

```py {numberLines}
['ArithmeticError', 'AssertionError', 'AttributeError', 'BaseException', 'BlockingIOError', 'BrokenPipeError',
'BufferError', 'BytesWarning', 'ChildProcessError', 'ConnectionAbortedError', 'ConnectionError', 'ConnectionRefusedError', 'ConnectionResetError', 'DeprecationWarning', 'EOFError', 'Ellipsis', 'EnvironmentError', 'Exception', 'False', 'FileExistsError', 'FileNotFoundError', 'FloatingPointError', 'FutureWarning', 'GeneratorExit', 'IOError', 'ImportError', 'ImportWarning', 'IndentationError', 'IndexError', 'InterruptedError', 'IsADirectoryError', 'KeyError', 'KeyboardInterrupt', 'LookupError', 'MemoryError', 'ModuleNotFoundError', 'NameError', 'None', 'NotADirectoryError', 'NotImplemented', 'NotImplementedError', 'OSError', 'OverflowError', 'PendingDeprecationWarning', 'PermissionError', 'ProcessLookupError', 'RecursionError', 'ReferenceError', 'ResourceWarning', 'RuntimeError', 'RuntimeWarning', 'StopAsyncIteration', 'StopIteration', 'SyntaxError', 'SyntaxWarning', 'SystemError', 'SystemExit', 'TabError', 'TimeoutError', 'True', 'TypeError', 'UnboundLocalError', 'UnicodeDecodeError', 'UnicodeEncodeError', 'UnicodeError', 'UnicodeTranslateError', 'UnicodeWarning', 'UserWarning', 'ValueError', 'Warning', 'WindowsError', 'ZeroDivisionError', '__build_class__', '__debug__', '__doc__', '__import__', '__loader__', '__name__', '__package__', '__spec__', 'abs', 'all', 'any', 'ascii', 'bin', 'bool', 'breakpoint', 'bytearray', 'bytes', 'callable', 'chr', 'classmethod', 'compile', 'complex', 'copyright', 'credits', 'delattr', 'dict', 'dir', 'divmod', 'enumerate', 'eval', 'exec', 'exit', 'filter', 'float', 'format', 'frozenset', 'getattr', 'globals', 'hasattr', 'hash', 'help', 'hex', 'id', 'input', 'int', 'isinstance', 'issubclass', 'iter', 'len', 'license', 'list', 'locals', 'map', 'max', 'memoryview', 'min', 'next', 'object', 'oct', 'open', 'ord', 'pow', 'print', 'property', 'quit', 'range', 'repr', 'reversed', 'round', 'set', 'setattr', 'slice', 'sorted', 'staticmethod', 'str', 'sum', 'super', 'tuple', 'type', 'vars', 'zip']
```

We can see that the built-in namespace includes exceptions, functions, types, special attributes, and other Python built-in objects.

It contains many of the built-in functions we are able to use in our Python programs such as ~~str()~~, ~~zip()~~, ~~slice()~~, ~~sorted()~~ and many more. It also hosts many of the exceptions that we may encounter in our programs such as ~~ArithmeticError~~, ~~IndexError~~, ~~KeyError~~ and many more. They are even constants like ~~True~~ & ~~False~~.
