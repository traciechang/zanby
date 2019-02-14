class User < ApplicationRecord
    validates_presence_of :provider, :uid, :email
    validates_uniqueness_of :uid, scope: :provider

    has_many :snakes, dependent: :destroy

    def self.find_or_create_from_auth_hash(auth)
        where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
            user.provider = auth.provider
            user.uid = auth.uid
            user.email = auth.info.email
            user.save!
        end
    end
end