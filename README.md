# online-quiz
A responsive online quiz website built with HTML, CSS, and JavaScript.

## How QuizMaster Works

```mermaid
flowchart TD
    A[Open Quiz Master] --> B[Welcome Screen]
    B -->|Start Quiz| C[Choose Category]

    C --> D[Choose Difficulty]

    D --> E{Questions Available?}

    E -->|No| F[Show Empty State]
    F -->|Choose Another Difficulty| D

    E -->|Yes| G[Prepare Quiz]

    G --> H[Shuffle Questions]
    H --> I[Shuffle Answer Options]

    I --> J[Start Quiz]

    J --> K[Display Question]
    K --> L[Start 30 Second Timer]

    L --> M{User Action}

    M -->|Select Answer| N[Check Answer]
    M -->|Time Runs Out| O[Mark as Unanswered]

    N --> P{Correct?}

    P -->|Yes| Q[Increase Score]
    P -->|No| R[Show Correct Answer]

    Q --> S[Disable Answer Buttons]
    R --> S
    O --> S

    S --> T{More Questions?}

    T -->|Yes| U[Next Question]
    U --> K

    T -->|No| V[Show Results]

    V --> W[Calculate Score]
    W --> X[Check High Score]
    X --> Y[Save High Score in localStorage]

    Y --> Z[Display Results]

    Z -->|Restart Quiz| C
   
