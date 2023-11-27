# BlockBuzz
BlockBuzz is a decentralized social media application built on the LUKSO network.

BlockBuzz aims to target various issues in the current social media landscape, such as:
- Data Privacy
- Censorship
- Centralization
- Fraudulent Activity
- Sybil Attacks

By implementing this project on the LUKSO network, we are able to leverage the benefits of blockchain technology to solve these issues. 

## Demo
[Demo Video]()

## Functionalities
- Register
- Login
- Homepage
- Profiles
    - Subscribe
    - Unsubscribe
- Posts
    - Create
    - Comment
    - Like

## Credits
This project smart contract has been adapted from [Eldiario](https://github.com/Tuszy/eldiario/tree/main/smart-contract). 
This project frontend has been adapted from [DayanNashon](https://github.com/DayanNahshon/Social-App).

What we have added in this project was to build upon the foundations of the above projects and incorporate them together. This project is intended to work upon the future tasks set by Eldiario, where we redesign and improve the UX of the project.

## Future Works
1. Loading improvements on the smart contract
    - Currently, time needed to load posts has some lag time as there is a massive amount of data that is layered and needs to be loaded
    - Possible solutions may be modify the structure of the smart contract such that retrieval of data is simplified
    - Another possible solution may be to implement a caching in another manner such that it is more efficient
2. Integrate transaction relaying with [thirdweb](https://thirdweb.com/) and payment channels to improve user experience
3. Right navbar & subscription updates for user experience
4. Left navbar & more functionalities such as messaging, etc.
