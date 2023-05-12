const currentProfile = async(req, res) => {
    const ({ email, password}) = req.body;

    const profile = await profile.findOne({email});

    if(profile && (await profile.matchPassword)) {
        res.json({
            name: profile.name,
            email: profile.email,
            avatar: profile.avatar,
            
        })
    }
}