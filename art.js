var figlet = require('figlet');
module.exports.run = (client, message, args) => {
    const reason = args.splice(0).join(" ")
    if (!reason) return message.channel.send("Merci d'indiquer un message de moin de 3 mots.")

    figlet.text(reason, {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        message.channel.send(data, {code : ''});
    });
    
    }
    
    module.exports.help = {
      name: 'art', // Défini le nom de la commande
      aliases: [''], // Défini ces alias [Plus tard pour le s!help]
      category: 'Misc', // Défini sa catégorie [Plus tard pour le s!help]
      description: 'envoie un art', // Défini sa description [Plus tard pour le s!help]
      cooldown: 5, // Défini le cooldown de la commande (en secondes)
      usage: '', // Utilisation de la commande {Exemple : si la commandes est s!ban <@pseudo> mettre : <@pseudo>}
      isUserAdmin: false, // Vérifie si l'utilisateur a visé a les permissions
      permissions: false, // Vérifie si l'utilisateur a besoin des permissions pour utiliser la commande
      args: false // Vérifie si la commande a besoin d'arguments
    }