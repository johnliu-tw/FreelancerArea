class ProposalMailer < ApplicationMailer
    def email(proposal)
        @proposal = proposal
        @admin = Admin.first
        delivery_options = { user_name: @admin.Email_account,
                         password: @admin.Email_password,
                         address: "smtp-mail.outlook.com",
                         domain: @admin.Email_host,
                         port: "587", }
        mail(to:@proposal.client_email, subject:"You're received a new proposal",delivery_method_options: delivery_options )
    end
end
