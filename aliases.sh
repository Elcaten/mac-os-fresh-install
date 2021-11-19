# Git aliases
alias gs="git status --short"
alias ga="git add"
alias gb="git branch"
alias gc="git checkout"
alias gme="git merge"
alias gplo="git pull origin '(git branch --show-current)'"
alias gpso="git push origin '(git branch --show-current)'"
alias gl="git log"
alias glp="git log -p"
alias gln="git log --name-only"
        alias gcv="git commit -v"
alias gcm="git commit -m"
alias gca="git commit --amend"
alias gd="git diff"
alias gms="set BRANCH '(git branch --show-current)'; git checkout staging; git merge $BRANCH; git push origin staging; git checkout $BRANCH"
alias gda="git diff --color --name-only --diff-filter=A"
alias gdm="git diff --color --name-only --diff-filter=M"
alias gdd="git diff --color --name-only --diff-filter=D"

# ls
alias l="exa --long --all --header --git"
alias lt="exa --long --all --header --tree --git"

# cd
alias cdd="cd ~/Downloads"
alias cds="cd ~/src"