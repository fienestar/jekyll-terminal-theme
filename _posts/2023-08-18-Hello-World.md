---
layout: post
title:  "Hello world!"
date:   2023-08-17 9:00
categories: lol
tags: [hello, world]
---

this is my first post!

| 1 | 2 | 3 |
|:--:|:--:|:--:|
| 4 | 5 | 6 |
| 7 | 8 | 9 |

```cpp
#include <iostream>

int main()
{
    std::cout << "Hello world!" << std::endl;
    return 0;
}
```

```bash
$ ls
```

```mermaid
erDiagram
    USER ||--o{ CART : user_id
    OPTION ||--o{ CART : option_id
    PRODUCT ||--|{ OPTION : product_id
    USER ||--o{ ORDER : user_id
    ORDER ||--|{ ORDER_OPTION : order_id
    OPTION ||--o{ ORDER_OPTION : option_id
```
