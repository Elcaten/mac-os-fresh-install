# Git aliases
alias g="git"
alias gplo="set BRANCH '(git branch --show-current)'; git pull origin $BRANCH"
alias gpso="set BRANCH '(git branch --show-current)'; git push origin $BRANCH"

# ls
alias l="exa --long --all --header --git"
alias lt="exa --long --all --header --tree --git"

# cd
alias cdd="cd ~/Downloads"
alias cds="cd ~/src"